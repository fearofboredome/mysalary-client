import React from 'react';

const App = () => (
  <React.Fragment>
    <h2 className="ui center aligned header">Calcul salaire</h2>
    <form className="ui form">
      <div className="ui stackable celled grid container">
        <div className="two column row">
          <div className="column">
            <div className="two fields">
              <div className="field">
                <label>Horaire brut</label>
                <input type="text" placeholder="0"/>
              </div>
              <div className="field">
                <label>Horaire net</label>
                <input type="text" placeholder="0"/>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Mensuel brut</label>
                <input type="text" placeholder="0"/>
              </div>
              <div className="field">
                <label>Mensuel net</label>
                <input type="text" placeholder="0"/>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Annuel brut</label>
                <input type="text" placeholder="0"/>
              </div>
              <div className="field">
                <label>Annuel net</label>
                <input type="text" placeholder="0"/>
              </div>
            </div>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="salarie_non_cadre" checked="" tabIndex="0" className="hidden"/>
                  <label>Salarié non cadre</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="salarie_cadre" checked="" tabIndex="0" className="hidden"/>
                  <label>Salarié cadre</label>
                </div>
              </div>
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

export default App;
