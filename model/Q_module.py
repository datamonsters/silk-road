import numpy as np
import os

dir_name = os.path.join(os.getcwd(), "data")


# dir_name="C:\\Users\\Win\\Desktop\\2018-01-18_QGIS\\"

def criteria(df_export, countries, importers):
    criteria = []
    cretaria_total = df_export.Importer == "ANY"

    for exp in countries:
        criteria = df_export.Exporter == exp
        cretaria_total = cretaria_total | criteria
    df_export = df_export[cretaria_total]
    cretaria_total = df_export.Importer != "ANY"

    for exp in countries:
        criteria = df_export.Importer != exp
        cretaria_total = cretaria_total & criteria
    df_export = df_export[cretaria_total]
    cretaria_total = df_export.Importer == "ANY"

    for imp in importers:
        criteria = df_export.Importer == imp
        cretaria_total = cretaria_total | criteria

    df_export = df_export[cretaria_total]
    return df_export


def fill_Q(jk_on, df, cities, df_export):
    # clean
    for i in range(df.shape[0]):
        for j in range(4, df.shape[1]):
            df.iloc[i, j] = 0

    for i in range(df.shape[0]):
        city = df.iloc[i, 1]
        for j in range(cities.shape[0]):
            if cities.iloc[j, 0] == city:
                df.iloc[i, 3] = j
                break

    countries = ["CHN", "KOR", "JPN"]
    importers = ["USA", "DEU", "GBR", "FRA", "BRA", "ITA", "RUS", "IND", "CAN", "AUS", "ESP", "MEX", "TUR", "IDN",
                 "NLD", "SAU", "CHE", "SWE", "NGA", "POL", "BEL", "ARG", "NOR", "VEN", "AUT", "IRN", "THA", "ARE"]

    df_temp = criteria(df_export, countries, importers)

    df_temp1 = df_temp[df_temp.Exporter == "CHN"]
    export_C = sum(df_temp1.iloc[:, -1])
    export_CJK = sum(df_temp.iloc[:, -1])

    q_size = 2.5
    china_proportion = export_C / export_CJK

    if jk_on == True:
        countries = ["CHN", "KOR", "JPN"]
        importers = ["USA", "DEU", "GBR", "FRA", "BRA", "ITA", "RUS", "IND", "CAN", "AUS", "ESP", "MEX", "TUR", "IDN",
                     "NLD", "SAU", "CHE", "SWE", "NGA", "POL", "BEL", "ARG", "NOR", "VEN", "AUT", "IRN", "THA", "ARE"]

    else:
        countries = ["CHN"]
        importers = ["USA", "JPN", "DEU", "GBR", "FRA", "BRA", "ITA", "RUS", "IND", "CAN", "AUS", "KOR", "ESP", "MEX",
                     "TUR", "IDN", "NLD", "SAU", "CHE", "SWE", "NGA", "POL", "BEL", "ARG", "NOR", "VEN", "AUT", "IRN",
                     "THA", "ARE"]

    df_export = criteria(df_export, countries, importers)

    goods = 11
    # Rows: china=0, korea=1, japan=2
    production = np.zeros((len(countries), goods))

    count = 0
    for country in countries:
        df2 = df_export[df_export["Exporter"] == country]
        for j in range(3, df2.shape[1]):
            production[count, j - 3] = sum(df2.iloc[:, j])
        count += 1

    total = sum(production[:, -1])
    # total=production[0,-1]
    if len(countries) > 1:
        production = production / total * q_size
    else:
        production = production / total * q_size * china_proportion

    for i in range(df.shape[0]):
        for j in range(len(countries)):
            if df.iloc[i, 0] == countries[j]:
                for k in range(goods):
                    df.iloc[i, k + 4] = production[j, k]
    for i in range(df.shape[0]):
        importer = df.iloc[i, 0]
        df2 = df_export[df_export["Importer"] == importer]
        for k in range(goods):
            if len(countries) > 1:
                df.iloc[i, k + 4] = df.iloc[i, k + 4] - sum(df2.iloc[:, k + 3]) / total * q_size
            else:
                df.iloc[i, k + 4] = df.iloc[i, k + 4] - sum(df2.iloc[:, k + 3]) / total * q_size * china_proportion

    df.to_csv(os.path.join(dir_name, "Q.csv"), index=False)
    return df

# print "DONE"
