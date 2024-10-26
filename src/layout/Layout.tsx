import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export const Layout: React.FC = () => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <TopBar />
            </div>
        </div>
    )
}
