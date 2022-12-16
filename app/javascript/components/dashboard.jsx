import { getAllUsers } from "../services/api-service";
import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import { Button } from "primereact/button";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    getAllUsers().then((data) => {
      this.setState((state) => ({
        users: data.data.data.users,
      }));
    });
  }

  say_hi = () => {
    alert("Hi!");
  };

  render() {
    return (
      <div>
        <DataTable value={this.state.users} responsiveLayout="scroll">
          <Column field="id" header="Code"></Column>
          <Column field="fullName" header="Name"></Column>
        </DataTable>
      </div>
    );
  }
}
export default Dashboard;
