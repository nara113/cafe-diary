import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchModal from "../location/SearchModal";

const DiaryForm = () => {
    const [state, setState] = useState({
        location: '',
        area: '',
        isPetAllowed: false,
        rating: '',
        review: '',
        imageFile: null
    });

    const [errors, setErrors] = useState();
    const [locationModalShow, setLocationModalShow] = useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        for (let key in state) {
            if (state[key] === null) continue;
            formData.append(key, state[key]);
        }

        console.log(state)

        axios.post("/api/content", formData)
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error.response.data);
                setErrors(error.response.data);
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
            <Form.Group className="mb-3" controlId="location">
                <Form.Label>μμΉ</Form.Label>
                <Button variant="primary" onClick={() => setLocationModalShow(true)}>
                    κ²μ
                </Button>
                {
                    locationModalShow &&
                    <SearchModal
                        show={locationModalShow}
                        onHide={() => setLocationModalShow(false)}
                        setState={setState}
                    />
                }
                {errors?.location && <span className="text-danger">{errors.location}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="area">
                <Form.Label>λμ΄</Form.Label>
                <div key="inline-radio" className="mb-3">
                    <Form.Check
                        inline
                        label="λμ"
                        name="area"
                        type="radio"
                        value="LARGE"
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        inline
                        label="λ³΄ν΅"
                        name="area"
                        type="radio"
                        value="MEDIUM"
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        inline
                        label="μ’μ"
                        name="area"
                        type="radio"
                        value="SMALL"
                        onChange={handleInputChange}
                    />
                </div>
                {errors?.area && <span className="text-danger">{errors.area}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>μ μκ²¬ λλ° κ°λ₯ μ¬λΆ</Form.Label>
                <Form.Check
                    type="checkbox"
                    label="κ°λ₯"
                    name="isPetAllowed"
                    onChange={handleCheckBoxChange}
                />
                {errors?.isPetAllowed && <span className="text-danger">{errors.isPetAllowed}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageFile">
                <Form.Label>μ΄λ―Έμ§ μ²¨λΆ</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                    name="imageFile"
                    onChange={handleImageChange}
                />
                {errors?.imageFile && <span className="text-danger">{errors.imageFile}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="rate">
                <Form.Label>νμ </Form.Label>
                <Form.Select name="rating" onChange={handleInputChange} aria-label="Default select example">
                    <option>νμ μ μ νν΄ μ£ΌμΈμ.</option>
                    <option value="1">1μ </option>
                    <option value="2">2μ </option>
                    <option value="3">3μ </option>
                    <option value="4">4μ </option>
                    <option value="5">5μ </option>
                </Form.Select>
                {errors?.rating && <span className="text-danger">{errors.rating}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>λ¦¬λ·°</Form.Label>
                <Form.Control as="textarea" name="review" rows={3} onChange={handleInputChange}/>
                {errors?.review && <span className="text-danger">{errors.review}</span>}
            </Form.Group>
            <Button variant="primary"
                    onClick={handleOnSubmit}
                    type="submit">
                λ±λ‘
            </Button>
        </Form>
    );
};

export default DiaryForm;