import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./empleados.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";

const products = [
  {
    id: 1,
    name: "Nueva escuela",
    price: 200000,
  },
  {
    id: 2,
    name: "Acuarela",
    price: 300000,
  },
  {
    id: 3,
    name: "Blanco y negro",
    price: 100000,
  },
  {
    id: 4,
    name: "Americano",
    price: 800000,
  },
  {
    id: 5,
    name: "Puntillismo",
    price: 600000,
  },
  {
    id: 6,
    name: "Realismo",
    price: 110000,
  },
  {
    id: 7,
    name: "Trhas polka",
    price: 252000,
  },
  {
    id: 8,
    name: "Sombras",
    price: 350000,
  },
  {
    id: 9,
    name: "Retratos",
    price: 900000,
  },
  {
    id: 10,
    name: "Black",
    price: 990000,
  },
  {
    id: 11,
    name: "Sombras",
    price: 350000,
  },
  {
    id: 12,
    name: "Retratos",
    price: 900000,
  },
  {
    id: 13,
    name: "Black",
    price: 990000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1> Buscar Empleados </h1>
        </Row>
        <Row>
          <PaginationProvider pagination={paginationFactory(options)}>
            {({ paginationProps, paginationTableProps }) => (
              <div>
                <BootstrapTable
                  keyField="id"
                  data={products}
                  columns={columns}
                  {...paginationTableProps}
                />
                <PaginationListStandalone {...paginationProps} />
              </div>
            )}
          </PaginationProvider>
        </Row>
      </Container>
    );
  }
}
