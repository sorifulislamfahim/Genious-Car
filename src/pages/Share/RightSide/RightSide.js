import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaTwitter, FaFax, FaInstagram, FaGoogle, FaTiktok, FaGithub, FaYahoo, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusol from '../BrandCarusol/BrandCarusol';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSide = () => {
    const {providerLogIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result?.user;
            console.log(user)
        })
        .catch(error => console.error('error', error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 px-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYahoo></FaYahoo> Yahoo</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsup</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTiktok></FaTiktok> TikTok</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram></FaInstagram> Instragram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaFax></FaFax> Fax Box</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarusol></BrandCarusol>
        </div>
    );
};

export default RightSide;