import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'
import Search from "./Search";
import LocationList from "./LocationList";
import axios from "axios";

const SearchModal = ({show, onHide, setState}) => {
    const [locationList, setLocationList] = useState();
    const [selectedLocation, setSelectedLocation] = useState();
    const [alertShow, setAlertShow] = useState(false);
    const [keyword, setKeyword] = useState();

    const search = () => {
        axios.get(`/api/location/${keyword}`)
            .then(data => {
                console.log(data.data.documents)

                setLocationList(data.data.documents);
            })
            .catch(error => {
                console.log(error.response.data);
            })

    }

    const saveLocation = () => {
        if (!selectedLocation) {
            setAlertShow(true);
            return;
        }

        setState((prevState) => ({
            ...prevState,
            'location': selectedLocation
        }));

        onHide();
    }

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
                <Search setKeyword={setKeyword}
                        search={search}/>
                {alertShow &&
                <Alert variant='danger'>
                    카페를 선택해주세요.
                </Alert>
                }
                {locationList && <LocationList locationList={locationList}
                                               setSelectedLocation={setSelectedLocation}/>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={saveLocation}>저장</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchModal;