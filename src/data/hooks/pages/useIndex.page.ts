import { UserShortInterface } from "data/@types/UserInterface";
import { ApiService } from "data/services/ApiService";
import { ValidationService } from "data/services/ValidationService";
import { useMemo, useState } from "react";

export default function useIndex() {
    const [zipCode, setZipCode] = useState(''),
        [error, setError] = useState(''),
        [searchDone, setSearchDone] = useState(false),
        [loading, setLoading] = useState(false),
        [dayLaborers, setDayLaborers] = useState([] as UserShortInterface[]),
        [dayLaborersRemaining, setDayLaborersRemaining] = useState(0);

    const zipCodeValid = useMemo(() => {
        return ValidationService.zipCode(zipCode);
    }, [zipCode]);

    async function searchDayLaborers(zipCode: string) {
        setSearchDone(false);
        setLoading(true);
        setError('');

        try {
            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diaristas: number
            }>('/api/diaristas-cidade?cep=' + zipCode.replace(/\D/g, ''));

            setDayLaborers(data.diaristas);
            setDayLaborersRemaining(data.quantidade_diaristas);
            setSearchDone(true);
            setLoading(false);
        } catch(e) {
            setError('CEP não encontrado');
            setLoading(false);
        }
    }

    return {
        zipCode, setZipCode, zipCodeValid,
        searchDayLaborers,
        error,
        dayLaborers,
        dayLaborersRemaining,
        loading,
        searchDone,
    };
}
