import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'
import Search from "./Search";
import LocationList from "./LocationList";
import axios from "axios";
import Page from "./Page";

const SearchModal = ({show, onHide, setState}) => {
    const [meta, setMeta] = useState();
    const [locationList, setLocationList] = useState();
    const [selectedLocation, setSelectedLocation] = useState();
    const [alertShow, setAlertShow] = useState(false);
    const [keyword, setKeyword] = useState();

    const search = (page) => {
        axios.get(`/api/location/${keyword}?page=${page}`)
            .then(data => {
                console.log(data.data)

                setMeta(data.data.meta);
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
            backdrop="static"
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
                {locationList && meta && <Page search={search} meta={meta}/>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={saveLocation}>저장</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchModal;