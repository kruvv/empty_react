import React from 'react';
import { AppContext } from '../context/app.context';

export default class MainPage extends React.Component {
    static contextType = AppContext;

    refreshTable = () => {
        if (this.table && this.table.current) {
            this.table.current.tryLoadData();
        }
    }


    render() {
        return (
            <div>
                Main Page
            </div>
        );
    }
}