import {FC} from "react";
import {IISRTableProps} from "./typing.tsx";
import {Card, Col, Row} from "react-bootstrap";
import {ISRTableItem} from "../ISRTableItem";
import {IISRTableItemProps} from "../ISRTableItem/typing.tsx";
import {useSelector} from "../../core/store";
import {selectUser} from "../../core/store/slices/selectors.ts";


export const ISRTable: FC<IISRTableProps> = (tableProps: IISRTableProps) => {
    const {isManager} = useSelector(selectUser);

    return (
        <div>
            <Card className="mb-2">
                <Card.Body className="py-2 px-3">
                    <Row className="d-flex align-items-center">
                        <Col>
                            <Card.Text><strong>№</strong></Card.Text>
                        </Col>
                        {isManager ?
                            <>
                                <Col>
                                    <Card.Text><strong>Автор</strong></Card.Text>
                                </Col>
                            </> :
                            <>
                            </>
                        }
                        <Col>
                            <Card.Text><strong>Статус</strong></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text><strong>Дата создания</strong></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text><strong>Дата оформления</strong></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text><strong>Дата завершения</strong></Card.Text>
                        </Col>

                        {isManager ?
                            <>
                                <Col>
                                    <Card.Text><strong>Завершить</strong></Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text><strong>Отклонить</strong></Card.Text>
                                </Col>
                            </> :
                            <>
                            </>}
                    </Row>
                </Card.Body>
            </Card>
            <>
                {tableProps.rows.map((row, index) => {
                    const props: IISRTableItemProps = {
                        pk: row.number,
                        status: row.status,
                        creationDate: row.creationDate,
                        registrationDate: row.registrationDate,
                        completionDate: row.completionDate,
                        client: row.client,
                        updateListPageFunc: tableProps.updateListPageFunc,
                    };
                    return (
                        <ISRTableItem key={index} {...props}/>
                    );
                })}
            </>
        </div>
    );
};
