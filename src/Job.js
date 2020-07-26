import React,{useState} from 'react'
import { Card,Badge,Button,Collapse } from 'react-bootstrap'
// import{Badge} from 'reactstrap'
import ReactMarkDown from 'react-markdown'

export default function Job( {job }) {

    const [open,setOpen] = useState(false)
    return (
        <div>
        <Card>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Card.Title>
                            {job.title} - <span className='text-muted font-weight-light'>{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-3">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>

                        <Badge variant="primary" className="mr-2"></Badge>
                        
                        <span >{job.type}</span>
                        <br></br>
                        <span >{job.location}</span>
                        <div style={{ wordBreak:'break-all' }} >
                        <ReactMarkDown source={job.how_to_apply}></ReactMarkDown>
                        </div>
                        <img className="d-md-block d-none" height="50" alt={job.company_name} src={job.company_logo}></img>
                    </div>
                </div>
                <Card.Text>
                    <Button onClick={ () => setOpen(Prevopen => !Prevopen)} variant="primary"> { open ? "Hide Details"  : "View Details" }</Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkDown source={job.description} />

                    </div>
                </Collapse>
            </Card.Body>
        </Card>
        
            
        </div>
    )
}
