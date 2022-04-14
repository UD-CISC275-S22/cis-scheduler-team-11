import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

export function DropdownMenu(buttons: JSX.Element[]): JSX.Element {
    const [display, setDisplay] = useState<boolean>(false);
    let key = 0;
    return (
        <div>
            <Button
                onClick={() => setDisplay(!display)}
                onBlur={() => setDisplay(false)}
            >
                ●●●
            </Button>
            {display && (
                <Container className="dropdown">
                    {buttons.map(
                        (button: JSX.Element): JSX.Element => (
                            <Row key={key++}>{button}</Row>
                        )
                    )}
                </Container>
            )}
        </div>
    );
}
