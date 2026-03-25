import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Button, Col, Form, Row } from "react-bootstrap"
import { RouteNames } from "../../constants"

export default function SmjerPromjena(){

    const navigate = useNavigate()
    const params = useParams()
    const [smjer, setSmjer] = useState({})
    const [aktivan, setAktivan] = useState(false)

    useEffect(()=>{
        ucitajSmjer()
    },[])

    async function ucitajSmjer(){
        await SmjerService.getBySifra(params.sifra).then((odgovor)=>{
            const s = odgovor.data
            s.datumPokretanja = s.datumPokretanja.substring(0,10)
            setSmjer(s)
            setAktivan(s.aktivan)
           // console.table(odgovor.data)
        })
    }

    async function promjeni(smjer){
        await SmjerService.promjeni(params.sifra,smjer).then(()=>{
            navigate(RouteNames.SMJEROVI)
        })
    }

    function odradiSubmit(e){
        e.preventDefault()
        const podaci = new FormData(e.target)
        promjeni({
            naziv: podaci.get('naziv'),
            trajanje: parseInt(podaci.get('trajanje')),
            cijena: parseFloat(podaci.get('cijena')),
            datumPokretanja: new Date(podaci.get('datumPokretanja')).toISOString(),
            aktivan: aktivan
        })
    }

    return(
      <>
        <h3>Promjena smjera</h3>
        <Form onSubmit={odradiSubmit}>
            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required defaultValue={smjer.naziv}/>
            </Form.Group>

            <Form.Group controlId="trajanje">
                <Form.Label>Trajanje</Form.Label>
                <Form.Control type="number" name="trajanje" step={1} defaultValue={smjer.trajanje}/>
            </Form.Group>

            <Form.Group controlId="cijena">
                <Form.Label>Cijena</Form.Label>
                <Form.Control type="number" name="cijena" step={0.01} defaultValue={smjer.cijena}/>
            </Form.Group>

            <Form.Group controlId="datumPokretanja">
                <Form.Label>Datum pokretanja smjera</Form.Label>
                <Form.Control type="date" name="datumPokretanja" defaultValue={smjer.datumPokretanja}/>
            </Form.Group>

            <Form.Group controlId="aktivan">
                <Form.Check label="Aktivan" name="aktivan" checked={aktivan} onChange={(e)=>{setAktivan(e.target.checked)}} />
            </Form.Group>

            <Row className="mt-4">
                <Col>
                    <Link to={RouteNames.SMJEROVI} className="btn btn-danger">
                        Odustani
                    </Link>
                </Col>
                <Col>
                    <Button type="submit" variant="success">
                        Promjeni smjer
                    </Button>
                </Col>
            </Row>


        </Form>
        </>
    )
}