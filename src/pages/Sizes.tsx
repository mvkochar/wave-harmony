import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import './css/Sizes.css'

const Sizes = () => {
    return (
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='How to take measurements?'
            />
            <h1 className="sizes-title">How to take measurements?</h1>
            <h4 className="sizes-subtitle">You will need to take measurements with a measuring tape</h4>
            <div className="sizes-box d-f jc-sb">
                <div className="sizes-item">
                    <div className="sizes-item-main">
                        <div className="sizes-item-title">Waist</div>
                    </div>
                    <p className="sizes-item-desc">
                        We measure strictly horizontally along the narrowest part of the body,
                        passing through the most protruding point of the abdomen.
                    </p>
                </div>
                <div className="sizes-item">
                    <div className="sizes-item-main">
                        <div className="sizes-item-title">Breast</div>
                    </div>
                    <p className="sizes-item-desc">
                        From the front, the tape should pass along the most protruding points,
                        from the side through the armpits, and from the back to wrap around the shoulder blades.
                    </p>
                </div>
                <div className="sizes-item">
                    <div className="sizes-item-main">
                        <div className="sizes-item-title">Hips</div>
                    </div>
                    <p className="sizes-item-desc">
                        The tape should be horizontal, passing in the middle of the thigh and behind
                        the most protruding points of the buttocks
                    </p>
                </div>
            </div>
            <table className="sizes-tb">
                <thead>
                    <tr>
                        <th>Ukranian</th>
                        <th>International</th>
                        <th>Chest (cm)</th>
                        <th>Waist(cm)</th>
                        <th>Hips(cm)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>40/42</td>
                        <td>XS</td>
                        <td>80-84</td>
                        <td>60-65</td>
                        <td>85-90</td>
                    </tr>
                    <tr>
                        <td>42/44</td>
                        <td>S</td>
                        <td>84-86</td>
                        <td>65-68</td>
                        <td>91-95</td>
                    </tr>
                    <tr>
                        <td>44/46</td>
                        <td>M</td>
                        <td>89-91</td>
                        <td>68-74</td>
                        <td>95-100</td>
                    </tr>
                    <tr>
                        <td>46/48</td>
                        <td>L</td>
                        <td>94-100</td>
                        <td>74-80</td>
                        <td>100-110</td>
                    </tr>
                </tbody>
            </table>
            <div className="sizes-note">
                <p>
                    If you are taller than 175 cm, choose + 1 size. A girl with parameters 85×66×93
                    falls into size “S”, but if she is taller than 175 cm, she must choose size “M”.
                </p>
                <p>
                    You can also order individual tailoring of your favorite swimsuit.
                    The process usually takes 3-4 working days, and its cost is +18 USD to the cost of the model.
                </p>
                <p>
                    If you have any difficulty choosing, our managers will be happy 
                    to help you decide on the size over the phone.
                </p>
            </div>
        </>

    )
}

export default Sizes