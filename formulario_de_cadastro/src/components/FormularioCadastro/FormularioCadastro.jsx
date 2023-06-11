import React, {useState} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { useEffect } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if(etapaAtual === formularios.length - 1){
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" align="center">Obrigado pelo cadastro!</Typography>
  ]

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados})
    console.log(dadosColetados)
    proximaEtapa()
  }

  function proximaEtapa(dados) {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}


export default FormularioCadastro;
