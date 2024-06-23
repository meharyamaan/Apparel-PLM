import React from 'react'
import '../../Styles/ordertitlecard.css'


export default function OrderTitleCard({title}) {
  return (
    <div>
        <div class="notification">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <div class="notititle">{title}</div>
        </div>
    </div>
  )
}
