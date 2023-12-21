import { Button, Form, Grid, GridRow, Icon, Menu, Modal } from "semantic-ui-react";
import { useState } from "react";
import "./NewRecipeForm.css";

const NewRecipeForm = ({handleAddNote}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    RecipeName: '',
    dishtype: '',
    description: '',
  })

  const handleChange = (event) => {
    // console.log('handle change called',event)
    const {name, value} = event.target
    setFormData((prevState) => 
      { return { 
          ...prevState, 
          [name] : value
        }
    })
  }

  const handleSubmitNote = (event) => {
    event.preventDefault()
    handleAddNote(formData)
    setOpen(false)
    setFormData({
      RecipeNameName: '',
      dishtype: '',
      description: '',
    })
  }

  const {RecipeName, dishtype, description} = formData
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Menu.Item><Icon name='plus'/>New Recipe</Menu.Item>}
    >
      <Modal.Header>Add a new Recipe</Modal.Header>
      {/* {console.log('FORM DATA: ',formData)} */}
      <Form className="add-note-form">
        <Form.Field>
          <label>What name would you like to give to this recipe?</label>
          <input placeholder="Enter Name" value={RecipeName} name='RecipeName' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Dish Type</label>
          <input placeholder="dessert/Indian/Italian..." value={dishtype} name='dishtype' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Recipe Instructions</label>
          <textarea placeholder="step-by-step instructions" value={description} name='description' onChange={handleChange}/>
        </Form.Field>
      </Form>

      <Modal.Actions>
        <Button
          content="Share this masterpiece!"
          labelPosition="right"
          icon="check right"
          onClick={handleSubmitNote}
          positive
          type="submit"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewRecipeForm;
