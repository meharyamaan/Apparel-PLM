const YourModel = require('../models/fullFileCopy')
const OrderMOdel = require('../models/orderList')
const ProductModel = require('../models/Product')
// const FileModel = require('../models/fileSchema')
// const fullFileModel = require('../models/fullFile')
// const fs = require('fs');
// const path = require('path');
// const XLSX = require('xlsx');

const uploadExcel = async (req, res) => {
  
  try {
    // const file = req.file;
    // if (!file) {
    //       throw new Error('No file uploaded');
    // }
      
    // const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    // const sheetName = workbook.SheetNames[0];
    // const sheet = workbook.Sheets[sheetName];
    // const data = XLSX.utils.sheet_to_json(sheet);

  const data = req.body;
  const transformedData = [];
  const columns = data[0];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowData = {};
  for (let j = 0; j < columns.length; j++) {
    const columnName = columns[j];
    const cellValue = row[j];
    rowData[columnName] = cellValue;
  }
  transformedData.push(rowData);
}
    // await fullFileModel.insertMany(data);
    await YourModel.insertMany(transformedData);
    console.log(transformedData);
    res.status(200).send('File uploaded and data stored in MongoDB.');
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).send('Error processing file: ' + error.message);
  }

};


// const KeyProcessDetails = async (req, res) => {
//   const projectId = req.params.projectId;
//   const cardName = req.params.cardName;

//   try {
//     const projectData = await YourModel.find({ projectId: projectId });
    
//     const cardDetailsArray = [];
//     projectData.forEach((project) => {
//       const styleWords = project[`STYLE`].split(" ").slice(0, 4).join(" ");

//       const cardDetails = {
//         startDate: project[`${cardName.toUpperCase()}_START_DATE`],
//         endDate: project[`${cardName.toUpperCase()}_END_DATE`],
//         style: styleWords,
//         total: project[`TOTAL`]
//       };
//       cardDetailsArray.push(cardDetails);
//     });

//     res.status(200).json(cardDetailsArray);
//   } catch (error) {
//     console.error('Error fetching project data:', error);
//     res.status(500).send('Error fetching project data');
//   }
// };

const excelToJsDate = (excelDateSerial) => {
  if (!excelDateSerial) return null;

  // Check if the value is a valid date
  if (!isNaN(excelDateSerial) && isFinite(excelDateSerial)) {
    // Convert Excel serial date to JavaScript date
    const date = new Date(Math.round((excelDateSerial - 25569) * 86400000));
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    return new Date(year, month - 1, day);
  } else {
    return excelDateSerial;
  }
};

const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return date;
  }
  return date.toISOString().split('T')[0];
};

const KeyProcessDetails = async (req, res) => {
  const projectId = req.params.projectId;
  const cardName = req.params.cardName;

  try {
    const projectData = await YourModel.find({ projectId: projectId });
    
    const cardDetailsArray = [];
    projectData.forEach((project) => {
      const styleWords = project[`STYLE`].split(" ").slice(0, 4).join(" ");

      const startDate = excelToJsDate(project[`${cardName.toUpperCase()}_START_DATE`]);
      const endDate = excelToJsDate(project[`${cardName.toUpperCase()}_END_DATE`]);

      const cardDetails = {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        style: styleWords,
        total: project[`TOTAL`]
      };
      cardDetailsArray.push(cardDetails);
    });

    res.status(200).json(cardDetailsArray);
  } catch (error) {
    console.error('Error fetching project data:', error);
    res.status(500).send('Error fetching project data');
  }
};



const orderDetails = async (req, res) => {
  const projectId = req.params.projectId;
  if (!projectId) {
    return res.status(400).json({ error: 'Missing projectId in request.' });
  }

  try {
    const orderData = await YourModel.find({ projectId: projectId });

    if (!orderData || orderData.length === 0) {
      return res.status(404).json({ error: `Order data not found for projectId: ${projectId}.` });
    }

    // Calculate the sum of the 'TOTAL' column
    const totalSum = orderData.reduce((acc, order) => acc + parseFloat(order.TOTAL), 0);

    console.log(totalSum);
    res.status(200).json({ orderData, totalSum }); 

  } catch (error) {
    console.error('Error fetching order details:', error);
    let errorMessage = 'Internal server error.';

    if (error.name === 'ValidationError') {
      errorMessage = `Invalid projectId provided: ${projectId}.`;
    } else if (error instanceof TypeError) {
      errorMessage = `Type error encountered: ${error.message}.`;
    } else if (error.name === 'CastError') {
      errorMessage = `Incorrect format for projectId: ${projectId}.`;
    }

    res.status(error.name === 'ValidationError' ? 400 : 500).json({ error: errorMessage });
  }
};




const OrderList = async (req, res) => {
  try {
    const { email } = req.params; // Destructure email from req.params
    console.log("Email is", email);
    const orders = await OrderMOdel.find({ email });
    
    // Check if orders exist
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' });
    }
    
    // Return orders if found
    res.json(orders);
  } catch (error) {
    console.error(error);
    // Check for specific errors
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    // Handle other errors
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// const singleOrder = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     if (!orderId) {
//       return res.status(400).json({ error: 'Missing orderId in request.' });
//     }
//     console.log(orderId);
//     const orderData = await OrderMOdel.findById(orderId).populate("products");
//     // console.log(orderData);

//     const totalSum = orderData.reduce((acc, order) => acc + parseFloat(order.TOTAL), 0);

//     console.log(totalSum);
//     res.status(200).json({ orderData, totalSum }); 

//     // res.status(200).json(order);
//   } catch (err) {
//     console.error("Error fetching order:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
const singleOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      return res.status(400).json({ error: 'Missing orderId in request.' });
    }
    
    console.log(orderId);
    const orderData = await OrderMOdel.findById(orderId).populate("products");

    if (!orderData) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    let totalSum = 0;
    orderData.products.forEach(product => {
      // console.log("Product:", product);
      if (product && (typeof product.TOTAL === 'string' || typeof product.TOTAL === 'number')) {
        const totalNumber = parseFloat(product.TOTAL);
        if (!isNaN(totalNumber)) {
          // console.log("Parsed TOTAL:", totalNumber);
          totalSum += totalNumber;
        }
      } else {
        // console.log("Invalid product or TOTAL property:", product);
      }
    });

    console.log("Final totalSum:", totalSum);
    res.status(200).json({ orderData, totalSum }); 
  } catch (err) {
    console.error("Error fetching order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};





module.exports = { 
  uploadExcel,
  KeyProcessDetails,
  orderDetails,
  OrderList,
  singleOrder
 };

