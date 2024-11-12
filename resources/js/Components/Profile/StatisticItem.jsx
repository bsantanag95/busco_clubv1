const StatisticItem = ({ statistic, positions }) => {
    const isGoalkeeper = positions.some(
        (position) => position.name === "Portero"
    );

    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-xs">
            <thead>
                <tr>
                    <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                        M
                    </th>
                    <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                        PJ
                    </th>
                    <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                        PT
                    </th>
                    <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                        G
                    </th>
                    {isGoalkeeper ? (
                        <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                            GC
                        </th>
                    ) : (
                        <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                            A
                        </th>
                    )}
                    <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                        TA
                    </th>
                    <th className="py-1 px-2 border-b text-center font-semibold text-gray-600">
                        TR
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-1 px-2 border-b text-gray-700 text-center">
                        {statistic.minutes ?? "-"}
                    </td>
                    <td className="py-1 px-2 border-b text-gray-700 text-center">
                        {statistic.games_played ?? "-"}
                    </td>
                    <td className="py-1 px-2 border-b text-gray-700 text-center">
                        {statistic.games_started ?? "-"}
                    </td>
                    <td className="py-1 px-2 border-b text-gray-700 text-center">
                        {statistic.goals ?? "-"}
                    </td>
                    {isGoalkeeper ? (
                        <td className="py-1 px-2 border-b text-gray-700 text-center">
                            {statistic.goals_conceded ?? "-"}
                        </td>
                    ) : (
                        <td className="py-1 px-2 border-b text-gray-700 text-center">
                            {statistic.assists ?? "-"}
                        </td>
                    )}
                    <td className="py-1 px-2 border-b text-gray-700 text-center">
                        {statistic.yellow_cards ?? "-"}
                    </td>
                    <td className="py-1 px-2 border-b text-gray-700 text-center">
                        {statistic.red_cards ?? "-"}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default StatisticItem;
