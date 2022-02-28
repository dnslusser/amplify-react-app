import React
    , {
        useState
        , useEffect
    } from 'react';

import { API } from 'aws-amplify';

export const GitHubBornOn = () => {

    const [bornOnInfo, setBornOnInfo] = useState({});

    const fetchGitHubBornOnInfo = async () => {
        try {
            const data = await API.get(
                'cryptoapi'
                , '/born'
            );
            setBornOnInfo(data.bornOnInfo);
        }
        catch (err) {
            setBornOnInfo({
                login: "Error"
                , created_at: "Error"
            });
        }
    };

    useEffect(
        () => {
            fetchGitHubBornOnInfo()
        }
        , []
    );

    return (
        <h2>
            {bornOnInfo.login} - {bornOnInfo.created_at}
        </h2>
    );
};