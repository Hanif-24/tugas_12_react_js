import "semantic-ui-css/semantic.min.css";

import { Grid,Checkbox, Form, Button, Header, Image, Segment,Message } from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column width={6}>
         <Form>
            <Header as='h2' color='teal'>
              <Image bordered src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /> 
              Member Login
            </Header>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'color='teal' fluid>
                
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
              Tidak Punya Akun ? Silahkan <a href="/"> Register</a>
            </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
