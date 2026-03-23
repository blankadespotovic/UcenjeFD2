import { useEffect, useState } from "react"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Table } from "react-bootstrap"
import { NumericFormat } from "react-number-format"
import { GrAdd, GrValidate } from "react-icons/gr"
import FormatDatuma from "../../components/FormatDatuma"
import { Link } from "react-router-dom"
import { RouteNames } from "../../constants"

export default function SmjerPregled(){

    const [smjerovi, setSmjerovi] = useState([])

    useEffect(()=>{
        ucitajSmjerove()
    },[])

    async function ucitajSmjerove(){
        await SmjerService.get().then((odgovor)=>{
            setSmjerovi(odgovor.data)
        })
    }


    return(
        <>
        <Link to={RouteNames.SMJEROVI_NOVI} 
        className="btn btn-success w-100 my-3">
            Dodavanje novog smjera 
        </Link>
        <Table>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Trajanje</th>
                    <th>Cijena</th>
                    <th>Datum pokretanja</th>
                    <th>Aktivan</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {smjerovi && smjerovi.map((smjer)=>(
                    <tr>
                        <td>{smjer.naziv}</td>
                        <td style={{textAlign: 'right'}}>{smjer.trajanje} h</td>
                        <td style={{textAlign: 'right'}}>
                            <NumericFormat 
                            value={smjer.cijena}
                            displayType={'text'}
                            thousandSeparator='.'
                            decimalSeparator=','
                            suffix=' €'
                            prefix='='
                            decimalScale={2}
                            fixedDecimalScale
                            />
                        </td>
                        <td>
                            <FormatDatuma datum={smjer.datumPokretanja} />
                        </td>
                        <td style={{textAlign: 'center'}}>
                            <GrValidate 
                            size={25}
                            color={smjer.aktivan ? 'green' : 'red'}
                            />
                            
                        </td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}