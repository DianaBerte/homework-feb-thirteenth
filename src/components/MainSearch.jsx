import { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Spinner ,Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job'
import { getBooksAction, GET_JOBS } from '../redux/actions'
// import { jobsSearchResultsReducer } from '../redux/reducers/job'
// import { fetchJobs } from '../redux/actions/actionCreators'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobsFromRedux = useSelector((state) => state.job.result)

  const applicationSpinner = useSelector((state) => state.job.isLoading)
  const applicationError = useSelector((state) => state.job.isError)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getBooksAction(query))}

    useEffect(() => {
      dispatch({
        type: GET_JOBS,
        payload: [],
      })
    }, []);  

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      {applicationError && (<Alert variant="danger" className="mr-2 text-center">Oh no, error occurred!</Alert> )}
      {applicationSpinner && ( <Spinner className='mr-2' animation='border' variant='success' /> )}
    </Container>
  )

}
export default MainSearch
