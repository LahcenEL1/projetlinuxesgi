import { Box, Divider, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link, Button, Grid, InputLabel, Input, FormControl, IconButton, InputAdornment, LinearProgress, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Container } from "@mui/system";
import React, { FunctionComponent, useState } from 'react';


import config from '../../style/config';
import AuthenticationService from '../../services/authentication-service';

type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field
}


function Home() {
  let navigate = useNavigate();
  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Vous êtes déconnecté. (User: ESGI / Mot de passe :ProjetLinuxEsgi)');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  }
  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if (form.password.value.length < 6) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = { value: form.password.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if (!isAuthenticated) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
        }
        navigate('/');

      });
    }
  }
  return (
    <Box sx={{
      pt: 5,
      minHeight: '80vh',
      backgroundColor: config.mainColor,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Container sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Box
          sx={{
            backgroundColor: 'white',
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            width: '100%',
            padding: '1em',
          }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col s12 m8 offset-m2">
                <div className="card hoverable">
                  <div className="card-stacked">
                    <div className="card-content">
                      {/* Form message */}
                      {message && <div className="form-group">
                        <div className="card-panel grey lighten-5">
                          {message}
                        </div>
                      </div>}
                      {/* Field username */}
                      <div className="form-group">
                        <label htmlFor="username">Identifiant</label>
                        <input id="username" type="text" name="username" className="form-control" value={form.username.value} onChange={e => handleInputChange(e)}></input>
                        {/* error */}
                        {form.username.error &&
                          <div className="card-panel red accent-1">
                            {form.username.error}
                          </div>}
                      </div>
                      {/* Field password */}
                      <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input id="password" type="password" name="password" className="form-control" value={form.password.value} onChange={e => handleInputChange(e)}></input>
                        {/* error */}
                        {form.password.error &&
                          <div className="card-panel red accent-1">
                            {form.password.error}
                          </div>}
                      </div>
                    </div>
                    <div className="card-action center">
                      {/* Submit button */}
                      <button type="submit" className="btn">Valider</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Container>
    </Box>
  )
}

export default Home;