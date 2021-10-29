import React from 'react';
import { Col, Row } from 'react-bootstrap';

const WeSpecial = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl">why we are so special?</h1>
            <Row xs={1} md={2} className="container mx-auto">
                <Col md={4}>
                    <img src="https://i.ibb.co/ZgbQY0G/sundarban.jpg" alt="" />
                </Col>
                <Col md={8}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi molestiae ipsum repellat sunt recusandae architecto quas doloribus minima illo nesciunt soluta odio accusantium id at blanditiis amet quidem dolorum in sapiente quae ullam velit, incidunt alias. Magnam dignissimos provident similique quas dolorem? Assumenda facere reprehenderit, temporibus nihil labore beatae.
                </Col>
            </Row>
        </div>
    );
};

export default WeSpecial;