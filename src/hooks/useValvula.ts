import { useState } from 'react';
import { RiegoInfo } from '../config/entities/riegoInfo';
import { usePostValvulaRiegoMutation } from '../http/http';

// hook para manejar el estado de una valvula
const useStateValvula = (initialValvula: RiegoInfo) => {
    const [valvula, setValvula] = useState(initialValvula);
    const [postValvulaRiego] = usePostValvulaRiegoMutation();

    // funcion para cambiar el estado de la valvula y enviarlo al servidor
    const toggleState = async () => {
        const newValvula = { ...valvula };
        newValvula.values[0].state = !newValvula.values[0].state;
        setValvula(newValvula);
        await postValvulaRiego(newValvula);
    }
    return { valvula, toggleState };
};

export default useStateValvula;