import React from 'react';
import { AppContext } from '../context/app.context';
import {Rest} from '../rest'

export default class MainPage extends React.Component {
    static contextType = AppContext;

    refreshTable = () => {
        if (this.table && this.table.current) {
            this.table.current.tryLoadData();
        }
    }


    render() {

        Rest.callMethod('crm.deal.list', null)
          .then(data => console.log(data))
          .catch(err => console.error(err))


        return (
            <div>
                Main Page 123
            </div>
        );
    }
}