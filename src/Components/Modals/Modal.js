// import React, { Component } from 'react';

// class Modal extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);

//     this.state = {
//       show: false
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   render() {

//     return (
//       <div>
//         <p>Click to get the full Modal experience!</p>

//         <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
//           Launch demo modal
//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h4>Text in a modal</h4>
//             <p>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </p>

//             <hr />

//             <h4>Overflowing text to show scroll behavior</h4>
//             <p>
//               Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//               dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
//               ac consectetur ac, vestibulum at eros.
//             </p>
            
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.handleClose}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// render(<Modal />);