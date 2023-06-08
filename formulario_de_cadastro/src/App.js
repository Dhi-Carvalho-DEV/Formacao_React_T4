import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container Component="article" maxWidth="sm" >
        <Typography
          variant="h3"
          Component="h1"
          align="center">
            Formulário de cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
