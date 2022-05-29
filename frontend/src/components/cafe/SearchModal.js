import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SearchModal = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    카페 검색
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="form-inline md-form form-sm active-pink active-pink-2 mt-2">
                    <i className="fa fa-search" aria-hidden="true"/>
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                           aria-label="Search"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchModal;