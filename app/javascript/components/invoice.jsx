import { getInvoice } from "../services/api-service";
import React from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.InvoiceId = 1;
    this.table = [
      {
        product: "ps5",
        id: 1,
        price: 1500,
      },
    ];
    this.state = {
      invoice: {},
      tableData: [],
    };
  }
  componentDidMount() {
    getInvoice(this.InvoiceId).then((data) => {
      let makeTable = data.data.data.invoice.sale?.products;
      makeTable = makeTable.replaceAll("[", "").replaceAll("]", "").split(",");
      let makeTableAll = makeTable.map((item) => {
        return {
          product: item,
          id: data.data.data.invoice.sale.id,
          price: data.data.data.invoice.sale?.totalAmount / 3,
        };
      });
      this.setState((state) => ({
        invoice: data.data.data.invoice,
        tableData: makeTableAll,
      }));
    });
  }

  render() {
    return (
      <div>
        <Card title="invoice" subTitle="No 1">
          <h5>Name: {this.state.invoice?.user?.fullName}</h5>
          <h5>email: {this.state.invoice?.user?.email}</h5>
          <h5>CI: {this.state.invoice?.user?.ci}</h5>
          <DataTable value={this.state.tableData} responsiveLayout="scroll">
            <Column field="id" header="Code"></Column>
            <Column field="product" header="Product"></Column>
            <Column field="price" header="Price"></Column>
          </DataTable>
          <h2>Total: ${this.state.invoice?.sale?.totalAmount}</h2>
        </Card>
      </div>
    );
  }
}
export default Invoice;
