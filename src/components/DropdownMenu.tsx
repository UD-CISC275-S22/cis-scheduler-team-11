import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Buttons } from "../interfaces/projectInterfaces";

export function DropdownMenu(Buttons: Buttons): JSX.Element {
    const [display, setDisplay] = useState<boolean>(false);
    let key = 0;
    return (
        <div
            className={
                "dropdown" + (Buttons.horizontal ? "Horizontal" : "Vertical")
            }
        >
            <Button
                variant="secondary"
                className="dropdownDots"
                onClick={() => setDisplay(!display)}
                onBlur={() => setDisplay(false)}
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
                    style={{
                        /* +*/
                        top:
                            "" +
                            (-21 +
                                (-31.25 * (Buttons.buttons.length + 1)) / 2) +
                            "px"
                    }}
                >
                    {Buttons.horizontal &&
                        Buttons.buttons.map(
                            (button: JSX.Element): JSX.Element => (
                                <Col key={key++}>h{button}</Col>
                            )
                        )}
                    {!Buttons.horizontal &&
                        Buttons.buttons.map(
                            (button: JSX.Element): JSX.Element => (
                                <Row key={key++}>v{button}</Row>
                            )
                        )}
                </Container>
            )}
        </div>
    );
}
