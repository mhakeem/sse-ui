import React, { Component } from 'react';
import Slider from 'react-slide-out';
import 'react-slide-out/lib/index.css';
import EventForm from './EventForm';
// import Popup from './Popup';  

const styles = {
//   fontFamily: 'sans-serif',
  // fontSize: '14px',
  paddingLeft: '25px',
  paddingBottom: '20px',
//   background: '#f4f4f4',
};

class EventHeader extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      // showPopup: false 
    }
    //extra
    this.handleNewEvent = this.handleNewEvent.bind(this);
    //extra
  }

  // togglePopup() {  
  //   this.setState({  
  //        showPopup: !this.state.showPopup  
  //   });  
  // }

  openSlider = () => {
    this.setState({
      isOpen: true
    });
  }
  closeSlider = () => {
    this.setState({
      isOpen: false
    });
  }

  handleNewEvent(newEvent) {
    this.props.onNewEvent(newEvent);
  }

  render () {
    return (
        <div>
          <h4>Events</h4> 
          {/* <p><button onClick={this.togglePopup.bind(this)}> New Event</button></p>
          {this.state.showPopup ?  
            <Popup 
              onNewEvent={this.handleNewEvent}
              closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
          }  */}
          <a href='#' onClick={this.openSlider}>Add New Event</a>
          <Slider 
            verticalOffset={{top: 118, bottom: 0}}
            title='Event Form'
            footer={
              <div style={{padding: '15px'}}>
                <a href='' onClick={this.closeSlider}>Close Form</a>
              </div>
            }
            isOpen={this.state.isOpen}
            onOutsideClick={this.closeSlider}>
            <div style={{padding: '15px'}}>
              <EventForm onNewEvent={this.handleNewEvent}/>
            </div>
          </Slider>
          <br/>
          <br/>
        </div>
      );
  };
}
export default EventHeader;