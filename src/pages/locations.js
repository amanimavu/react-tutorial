import React from 'react';
import {Instagram, Twitter, Facebook} from 'react-feather';

export default () =>
    <footer>
        <div>
            <h3 className="text-center">Location</h3>
            <div>
                <section>
                    <table className="table">
                        <tr>
                            <th scope="row">Nairobi</th>
                            <td className="text-right">West Gate Mall</td>
                        </tr>
                        <tr>
                            <th scope="row">Mombasa</th>
                            <td className="text-right">City Mall</td>
                        </tr>
                        <tr>
                            <th scope="row">Eldoret</th>
                            <td className="text-right">Khetia center</td>
                        </tr>
                    </table>
                </section>
            </div>
            <br></br>
            <div>
                <Instagram size="35" color="purple" className="ml-3"/>
                <Facebook size="35" color="#4267B2" className="ml-3" />
                <Twitter size="35" color="blue" className="ml-3" />
            </div>
        </div>
    </footer>