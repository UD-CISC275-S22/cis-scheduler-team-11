import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Buttons, ButtonProps } from "../interfaces/projectInterfaces";

export function DropdownMenu(Buttons: Buttons): JSX.Element {
    const [display, setDisplay] = useState<boolean>(false);
    let key = 0;
    const topStyleV = {
        top: "" + (-1 + -31 * (Buttons.buttons.length / 2 - 0.5)) + "px"
    };
    return (
        <div
            className={
                "dropdown" + (Buttons.horizontal ? "Horizontal" : "Vertical")
            }
        >
            <Button
                variant="secondary"
                className="dropdownDots"
                onClick={() => {
                    setDisplay(!display);
                    //console.log("dots");
                }}
                size="sm"
            >
                ●●●
            </Button>
            {display && (
                <Container
                    className={
                        "dropdownMenu" +
                        (Buttons.horizontal ? "Horizontal" : "Vertical")
                    }
                    style={
                        Buttons.horizontal
                            ? { position: "relative" }
                            : topStyleV
                    }
                    //onBlur={() => setDisplay(false)}
                >
                    {Buttons.horizontal &&
                        Buttons.buttons.map(
                            (button: ButtonProps): JSX.Element => (
                                <Col key={key++}>
                                    <Button
                                        variant={
                                            button.variant
                                                ? button.variant
                                                : "secondary"
                                        }
                                        size={button.size ? button.size : "sm"}
                                        key={key}
                                        onClick={button.click}
                                    >
                                        {" "}
                                        {button.text}
                                    </Button>
                                </Col>
                            )
                        )}
                    {!Buttons.horizontal &&
                        Buttons.buttons.map(
                            (button: ButtonProps): JSX.Element => (
                                <Row key={key++}>
                                    <Button
                                        variant={
                                            button.variant
                                                ? button.variant
                                                : "primary"
                                        }
                                        size={button.size ? button.size : "sm"}
                                        key={key}
                                        onClick={button.click}
                                    >
                                        {" "}
                                        {button.text}
                                    </Button>
                                </Row>
                            )
                        )}
                </Container>
            )}
        </div>
    );
}
