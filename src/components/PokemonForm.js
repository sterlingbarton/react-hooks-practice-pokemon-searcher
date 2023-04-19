import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonList, setPokemonList}) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  })

  function handleChange(e){
    setFormData(() => {
      if(e.target.name === 'front' || e.target.name === 'back'){
        console.log(formData)
        return {...formData, "sprites" : {...formData.sprites, [e.target.name]: e.target.value}}
      }else return {...formData, [e.target.name]: e.target.value}
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },body: JSON.stringify(formData)
  })
    .then(r => r.json())
    .then(data => setPokemonList({...pokemonList, data}))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
