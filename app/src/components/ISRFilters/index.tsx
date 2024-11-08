import {FC} from "react";
import {IISRFiltersProps} from "./typing.tsx";
import {Card, Form} from "react-bootstrap";


export const ISRFilters: FC<IISRFiltersProps> = (props: IISRFiltersProps) => {
    return (
        <Card className="m-3">
            <Card.Body>
                <Form>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="flex-grow-1 pe-3">
                            <Form.Group controlId="status">
                                <Form.Label>Статус</Form.Label>
                                <Form.Select value={props.selectedStatus} onChange={props.handleStatusChange}>
                                    <option value="">Выберите статус</option>
                                    <option value="active">В работе</option>
                                    <option value="inactive">Завершена</option>
                                    <option value="pending">Отклонена</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="flex-grow-1  pe-3">
                            <Form.Group controlId="startDate">
                                <Form.Label>Дата начала</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={props.selectedStartDate}
                                    onChange={props.handleStartDateChange}
                                />
                            </Form.Group>
                        </div>

                        <div className="flex-grow-1  pe-3">
                            <Form.Group controlId="endDate">
                                <Form.Label>Дата окончания</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={props.selectedEndDate}
                                    onChange={props.handleEndDateChange}
                                />
                            </Form.Group>
                        </div>

                        <button className="btn dark-blue-btn">
                            Показать
                        </button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};
