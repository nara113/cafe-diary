import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form'
import React from "react";

const LocationList = ({locationList, setSelectedLocation}) => {

    const selectLocation = (event, location) => {
        event.currentTarget.getElementsByTagName('input').locationRadio.checked = true;
        setSelectedLocation(location);
    };

    return (
        <Table bordered hover>
            <tbody>
            {locationList.map(location => {
                    return (
                        <tr key={location.id} onClick={event => selectLocation(event, location)}>
                            <td><Form.Check type="radio" name="locationRadio" aria-label="radio 1"/></td>
                            <td>{location.place_name} <br/> {location.road_address_name}</td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </Table>
    )
}

export default LocationList;