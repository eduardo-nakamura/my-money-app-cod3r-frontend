import React, { Component } from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuItem path='#/dashboardNoRedux' label='Dashboard sem Redux' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#/billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)