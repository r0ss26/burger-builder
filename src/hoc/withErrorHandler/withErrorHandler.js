import React from 'react';
import Modal from '../../Components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req;
      })
      axios.interceptors.response.use(res => res, error => {
        console.log(error)
        this.setState({error})
        return error;
      });
    }

    handleClick = () => {
      this.setState({error: null})
    }

    render() {
      return (
        <>
          <Modal toggleModal={this.handleClick} show={this.state.error ? true : false}>{this.state.error && this.state.error.message}</Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
