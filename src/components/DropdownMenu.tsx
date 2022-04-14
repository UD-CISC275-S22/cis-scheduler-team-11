import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Buttons } from "../interfaces/projectInterfaces";

export function DropdownMenu(Buttons: Buttons): JSX.Element {
    const [display, setDisplay] = useState<boolean>(false);
    let key = 0;
    return (
        <div className="dropdown">
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
                    className="dropdownMenu"
                    style={{
                        /* +*/
                        top:
                            "" +
                            (-21 +
                                (-31.25 * (Buttons.buttons.length + 1)) / 2) +
                            "px"
                    }}
                >
                    {Buttons.buttons.map(
                        (button: JSX.Element): JSX.Element => (
                            <Row key={key++}>{button}</Row>
                        )
                    )}
                </Container>
            )}
        </div>
    );
}
