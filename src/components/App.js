import React from 'react';

import {reduxForm} from "redux-form";
import {Field} from "redux-form";

class App extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
  }
  renderNumberInput = ({input, label}) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type="number" placeholder="0"/>
      </div>
    )
  }
  render() {
    return (
      <React.Fragment>
        <h2 className="ui center aligned header">Calcul salaire</h2>
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="ui stackable celled grid container">
            <div className="two column row">
              <div className="column">
                <div className="two fields">
                  <Field name="horaire_brut" label="Horaire brut"  component={this.renderNumberInput} />
                  <Field name="horaire_net" label="Horaire net" component={this.renderNumberInput} />
                </div>
                <div className="two fields">
                  <Field name="mensuel_brut" label="Mensuel brut" component={this.renderNumberInput} />
                  <Field name="mensuel_net" label="Mensuel net" component={this.renderNumberInput} />
                </div>
                <div className="two fields">
                  <Field name="annuel_brut" label="Annuel brut" component={this.renderNumberInput} />
                  <Field name="annuel_net" label="Annuel net" component={this.renderNumberInput} />
                </div>
                <div className="inline fields">

                </div>
              </div>
              <div className="column">
                <div className="ui segment">Formulaire 2</div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}



export default reduxForm({form: 'salaryForm'})(App);;
