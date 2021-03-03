import {Form,Button} from 'react-bootstrap';

function RegForm() {
    return (
      <div>
        <h1 className="text-center text-dark">Registration Form</h1>
        <Form>
            <Form.Group>
                <Form.Label>Name<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="text" placeholder="Enter Full Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Mobile Number<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="number" placeholder="Enter Mobile Number" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="email" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="password" placeholder="Enter Password" />
            </Form.Group>

           
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    );
  }
  
  export default RegForm;