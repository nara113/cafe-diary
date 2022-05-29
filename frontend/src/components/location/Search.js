import React from "react";
import {Button, Col, Form, Row} from 'react-bootstrap';

const Search = ({setKeyword, search}) => {

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <Form>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Control
                        className="mb-2"
                        name="cafeName"
                        placeholder="카페명을 입력해주세요."
                        onChange={handleInputChange}
                    />
                </Col>
                <Col xs="auto">
                    <Button onClick={search} className="mb-2">
                        검색
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Search;