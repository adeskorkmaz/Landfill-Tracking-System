import React from 'react';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  const data = [
    {
      "ID": "1",
      "TESIS_ADI": "İnegöl Katı Atık Düzenli Depolama Alanı",
      "MEVKI": "Yeniyörük/İnegol",
      "TOPLAM_ALAN_M2": "244000",
      "COP_DOKUM_ALANI_M2": "166000",
      "TOPLAM_KAPASITE_TON": "4471500",
      "DEPO_SINIFI": "2",
      "HIZMET_NUFUSU": "371445",
      "HIZMET_VERILEN_ILCELER": "İnegöl, Yenişehir, İznik",
      "FAALIYETE_BASLAMA_TARIHI": "9/1/11",
      "IDAREMIZE_DEVIR_TARIHI": "3/25/14",
      "IDAREMIZE_ISLETMEYE_ALMA_TARIHI": "9/11/14",
      "ONGORULEN_KAPANMA_TARIHI": "2037"
    },
    {
      "ID": "2",
      "TESIS_ADI": "Yenikent Katı Atık Düzenli Depolama Alanı",
      "MEVKI": "Yenikent/Osmangazi",
      "TOPLAM_ALAN_M2": "1561800",
      "COP_DOKUM_ALANI_M2": "910000",
      "TOPLAM_KAPASITE_TON": "25371000",
      "DEPO_SINIFI": "2",
      "HIZMET_NUFUSU": "2637240",
      "HIZMET_VERILEN_ILCELER": "Osmangazi, Yıldırım, Nilüfer, Mudanya, Gemlik, Gürsu, Kestel, Karacabey, Mustafakemalpaşa, Orhangazi",
      "FAALIYETE_BASLAMA_TARIHI": "8/1/95",
      "IDAREMIZE_DEVIR_TARIHI": "",
      "IDAREMIZE_ISLETMEYE_ALMA_TARIHI": "",
      "ONGORULEN_KAPANMA_TARIHI": "2027" 
    }
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Katı Atık Düzenli Depolama Tesisleri</h1>
      <Table striped bordered hover responsive className="table-light">
        <thead>
          <tr>
            <th>#</th>
            <th>Tesis Adı</th>
            <th>Mevki</th>
            <th style={{ whiteSpace: 'nowrap' }}>Toplam Alan</th>
            <th style={{ whiteSpace: 'nowrap' }}>Çöp Döküm Alanı</th>
            <th style={{ whiteSpace: 'nowrap' }}>Toplam Kapasite</th>
            <th>Hizmet Verilen İlçeler</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.ID}</td>
              <td>{item.TESIS_ADI}</td>
              <td>{item.MEVKI}</td>
              <td>{item.TOPLAM_ALAN_M2} m²</td>
              <td>{item.COP_DOKUM_ALANI_M2} m²</td>
              <td>{item.TOPLAM_KAPASITE_TON} Ton</td>
              <td>{item.HIZMET_VERILEN_ILCELER}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
