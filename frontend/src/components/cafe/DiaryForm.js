import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const DiaryForm = () => {
    const [state, setState] = useState({
        cafeName: '',
        location: '',
        area: '',
        isPetAllowed: false,
        rating: null,
        review: null,
        image: null
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        for (let key in state) {
            formData.append(key, state[key]);
        }

        axios.post("/api/content", formData)
            .then(data => {

            })
            .catch(() => {

            })
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckBoxChange = (event) => {
        const {name, checked} = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: checked
        }));
    }

    const handleImageChange = (event) => {
        const name = event.target.name;
        const uploadedFile = event.target.files[0];

        setState((prevState) => ({
            ...prevState,
            [name]: uploadedFile
        }));
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="cafeName">
                <Form.Label>카페명</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="카페명을 입력해주세요."
                    name="cafeName"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
                <Form.Label>위치</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="위치를 입력해주세요."
                    name="location"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>넓이</Form.Label>
                <div key="inline-radio" className="mb-3">
                    <Form.Check
                        inline
                        label="넓음"
                        name="area"
                        type="radio"
                        value="large"
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        inline
                        label="보통"
                        name="area"
                        type="radio"
                        value="medium"
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        inline
                        label="좁음"
                        name="area"
                        type="radio"
                        value="small"
                        onChange={handleInputChange}
                    />
                </div>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>애완견 동반 가능 여부</Form.Label>
                <Form.Check
                    type="checkbox"
                    label="가능"
                    name="isPetAllowed"
                    onChange={handleCheckBoxChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>이미지 첨부</Form.Label>
                <Form.Control
                    type="file"
                    placeholder="image"
                    name="image"
                    onChange={handleImageChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="rate">
                <Form.Label>평점</Form.Label>
                <Form.Select name="rating" onChange={handleInputChange} aria-label="Default select example">
                    <option>평점을 선택해 주세요.</option>
                    <option value="1">1점</option>
                    <option value="2">2점</option>
                    <option value="3">3점</option>
                    <option value="4">4점</option>
                    <option value="5">5점</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>리뷰</Form.Label>
                <Form.Control as="textarea" name="review" rows={3} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary"
                    onClick={handleOnSubmit}
                    type="submit">
                등록
            </Button>
        </Form>
    );
};

export default DiaryForm;