// import data from '../../../../data.json';
import { RegisterService } from '../services/register.service.js';
export class Register {
  public Prueba: number
  public AIGAIN: number
  public AVGAIN: number
  public AV2GAIN: number
  public BIGAIN: number
  public BVGAIN: number
  public BV2GAIN: number
  public CIGAIN: number
  public CVGAIN: number
  public CV2GAIN: number
  public NIGAIN: number
  public NVGAIN: number
  public NV2GAIN: number
  public AIRMSOS: number
  public AVRMSOS: number
  public AV2RMSOS: number
  public BIRMSOS: number
  public BVRMSOS: number
  public BV2RMSOS: number
  public CIRMSOS: number
  public CVRMSOS: number
  public CV2RMSOS: number
  public NIRMSOS: number
  public NVRMSOS: number
  public NV2RMSOS: number
  public ISUMLVL: number
  public APGAIN: number
  public BPGAIN: number
  public CPGAIN: number
  public AWATTOS: number
  public BWATTOS: number
  public CWATTOS: number
  public AVAROS: number
  public BVAROS: number
  public CVAROS: number
  public VLEVEL: number
  public AFWATTOS: number
  public BFWATTOS: number
  public CFWATTOS: number
  public AFVAROS: number
  public BFVAROS: number
  public CFVAROS: number
  public AFIRMSOS: number
  public BFIRMSOS: number
  public CFIRMSOS: number
  public AFVRMSOS: number
  public BFVRMSOS: number
  public CFVRMSOS: number
  public TEMPCO: number
  public ATEMPo: number
  public BTEMPo: number
  public CTEMPo: number
  public NTEMPo: number
  public ATGAIN: number
  public BTGAIN: number
  public CTGAIN: number
  public NTGAIN: number
  public AIRMS: number
  public AVRMS: number
  public AV2RMS: number
  public BIRMS: number
  public BVRMS: number
  public BV2RMS: number
  public CIRMS: number
  public CVRMS: number
  public CV2RMS: number
  public NIRMS: number
  public ISUM: number
  public ATEMP: number
  public BTEMP: number
  public CTEMP: number
  public NTEMP: number
  public Run: number
  public AWATTHR: number
  public BWATTHR: number
  public CWATTHR: number
  public AFWATTHR: number
  public BFWATTHR: number
  public CFWATTHR: number
  public AVARHR: number
  public BVARHR: number
  public CVARHR: number
  public AFVARHR: number
  public BFVARHR: number
  public CFVARHR: number
  public AVAHR: number
  public BVAHR: number
  public CVAHR: number
  public IPEAK: number
  public VPEAK: number
  public STATUS0: number
  public STATUS1: number
  public OILVL: number
  public OVLVL: number
  public SAGLVL: number
  public MASK0: number
  public MASK1: number
  public IAWV: number
  public IBWV: number
  public ICWV: number
  public INWV: number
  public VAWV: number
  public VBWV: number
  public VCWV: number
  public VA2WV: number
  public VB2WV: number
  public VC2WV: number
  public VNWV: number
  public VN2WV: number
  public AWATT: number
  public BWATT: number
  public CWATT: number
  public AVAR: number
  public BVAR: number
  public CVAR: number
  public AVA: number
  public BVA: number
  public CVA: number
  public AVTHD: number
  public AITHD: number
  public BVTHD: number
  public BITHD: number
  public CVTHD: number
  public CITHD: number
  public NVRMS: number
  public NV2RMS: number
  public CHECKSUM: number
  public VNOM: number
  public AFIRMS: number
  public AFVRMS: number
  public BFIRMS: number
  public BFVRMS: number
  public CFIRMS: number
  public CFVRMS: number
  public LAST_RWDATA32: number
  public PHSTATUS: number
  public ANGLE0: number
  public ANGLE1: number
  public ANGLE2: number
  public PHNOLOAD: number
  public LINECYC: number
  public ZXTOUT: number
  public CAMPMODE: number
  public CFMODE: number
  public CF1DEN: number
  public CF2DEN: number
  public CF3DEN: number
  public APHCAL: number
  public BPHCAL: number
  public CPHCAL: number
  public PHSING: number
  public CONFIG: number
  public MMODE: number
  public ACCMODE: number
  public LCYCMODE: number
  public PEAKCYC: number
  public SAGCYC: number
  public CFCYC: number
  public HSDC_CFG: number
  public Version: number
  public CONFIG3: number
  public ATEMPOS: number
  public BTEMPOS: number
  public CTEMPOS: number
  public NTEMPOS: number
  public LAST_RWDATA8: number
  public APF: number
  public BPF: number
  public CPF: number
  public APERIOD: number
  public BPERIOD: number
  public CPERIOD: number
  public APNOLOAD: number
  public VARNOLOAD: number
  public VANOLOAD: number
  public LAST_ADD: number
  public LAST_RWDATA16: number
  public CONFIG2: number
  public LAST_OP: number
  public WTHR: number
  public VARTHR: number
  public VATHR: number
  constructor(private registerService: RegisterService) {
    console.log("Register Ctr")
    this.getRegister()
  }

  getRegister() {
    console.log("entra")
    this.registerService.getRegister().
      subscribe((data: any) => {
        localStorage.setItem("parseo", '0')
        console.log(data[0].AIGAIN)
        this.Prueba = parseInt(data[0].Prueba);
        this.AIGAIN = parseInt(data[0].AIGAIN);
        this.AVGAIN = parseInt(data[0].AVGAIN);
        this.AV2GAIN = parseInt(data[0].AV2GAIN);
        this.BIGAIN = parseInt(data[0].BIGAIN);
        this.BVGAIN = parseInt(data[0].BVGAIN);
        this.BV2GAIN = parseInt(data[0].BV2GAIN);
        this.CIGAIN = parseInt(data[0].CIGAIN);
        this.CVGAIN = parseInt(data[0].CVGAIN);
        this.CV2GAIN = parseInt(data[0].CV2GAIN);
        this.NIGAIN = parseInt(data[0].NIGAIN);
        this.NVGAIN = parseInt(data[0].NVGAIN);
        this.NV2GAIN = parseInt(data[0].NV2GAIN);
        this.AIRMSOS = parseInt(data[0].AIRMSOS);
        this.AVRMSOS = parseInt(data[0].AVRMSOS);
        this.AV2RMSOS = parseInt(data[0].AV2RMSOS);
        this.BIRMSOS = parseInt(data[0].BIRMSOS);
        this.BVRMSOS = parseInt(data[0].BVRMSOS);
        this.BV2RMSOS = parseInt(data[0].BV2RMSOS);
        this.CIRMSOS = parseInt(data[0].CIRMSOS);
        this.CVRMSOS = parseInt(data[0].CVRMSOS);
        this.CV2RMSOS = parseInt(data[0].CV2RMSOS);
        this.NIRMSOS = parseInt(data[0].NIRMSOS);
        this.NVRMSOS = parseInt(data[0].NVRMSOS);
        this.NV2RMSOS = parseInt(data[0].NV2RMSOS);
        this.ISUMLVL = parseInt(data[0].ISUMLVL);
        this.APGAIN = parseInt(data[0].APGAIN);
        this.BPGAIN = parseInt(data[0].BPGAIN);
        this.CPGAIN = parseInt(data[0].CPGAIN);
        this.AWATTOS = parseInt(data[0].AWATTOS);
        this.BWATTOS = parseInt(data[0].BWATTOS);
        this.CWATTOS = parseInt(data[0].CWATTOS);
        this.AVAROS = parseInt(data[0].AVAROS);
        this.BVAROS = parseInt(data[0].BVAROS);
        this.CVAROS = parseInt(data[0].CVAROS);
        this.VLEVEL = parseInt(data[0].VLEVEL);
        this.AFWATTOS = parseInt(data[0].AFWATTOS);
        this.BFWATTOS = parseInt(data[0].BFWATTOS);
        this.CFWATTOS = parseInt(data[0].CFWATTOS);
        this.AFVAROS = parseInt(data[0].AFVAROS);
        this.BFVAROS = parseInt(data[0].BFVAROS);
        this.CFVAROS = parseInt(data[0].CFVAROS);
        this.AFIRMSOS = parseInt(data[0].AFIRMSOS);
        this.BFIRMSOS = parseInt(data[0].BFIRMSOS);
        this.CFIRMSOS = parseInt(data[0].CFIRMSOS);
        this.AFVRMSOS = parseInt(data[0].AFVRMSOS);
        this.BFVRMSOS = parseInt(data[0].BFVRMSOS);
        this.CFVRMSOS = parseInt(data[0].CFVRMSOS);
        this.TEMPCO = parseInt(data[0].TEMPCO);
        this.ATEMPo = parseInt(data[0].ATEMPo);
        this.BTEMPo = parseInt(data[0].BTEMPo);
        this.CTEMPo = parseInt(data[0].CTEMPo);
        this.NTEMPo = parseInt(data[0].NTEMPo);
        this.ATGAIN = parseInt(data[0].ATGAIN);
        this.BTGAIN = parseInt(data[0].BTGAIN);
        this.CTGAIN = parseInt(data[0].CTGAIN);
        this.NTGAIN = parseInt(data[0].NTGAIN);
        this.AIRMS = parseInt(data[0].AIRMS);
        this.AVRMS = parseInt(data[0].AVRMS);
        this.AV2RMS = parseInt(data[0].AV2RMS);
        this.BIRMS = parseInt(data[0].BIRMS);
        this.BVRMS = parseInt(data[0].BVRMS);
        this.BV2RMS = parseInt(data[0].BV2RMS);
        this.CIRMS = parseInt(data[0].CIRMS);
        this.CVRMS = parseInt(data[0].CVRMS);
        this.CV2RMS = parseInt(data[0].CV2RMS);
        this.NIRMS = parseInt(data[0].NIRMS);
        this.ISUM = parseInt(data[0].ISUM);
        this.ATEMP = parseInt(data[0].ATEMP);
        this.BTEMP = parseInt(data[0].BTEMP);
        this.CTEMP = parseInt(data[0].CTEMP);
        this.NTEMP = parseInt(data[0].NTEMP);
        this.Run = parseInt(data[0].Run);
        this.AWATTHR = parseInt(data[0].AWATTHR);
        this.BWATTHR = parseInt(data[0].BWATTHR);
        this.CWATTHR = parseInt(data[0].CWATTHR);
        this.AFWATTHR = parseInt(data[0].AFWATTHR);
        this.BFWATTHR = parseInt(data[0].BFWATTHR);
        this.CFWATTHR = parseInt(data[0].CFWATTHR);
        this.AVARHR = parseInt(data[0].AVARHR);
        this.BVARHR = parseInt(data[0].BVARHR);
        this.CVARHR = parseInt(data[0].CVARHR);
        this.AFVARHR = parseInt(data[0].AFVARHR);
        this.BFVARHR = parseInt(data[0].BFVARHR);
        this.CFVARHR = parseInt(data[0].CFVARHR);
        this.AVAHR = parseInt(data[0].AVAHR);
        this.BVAHR = parseInt(data[0].BVAHR);
        this.CVAHR = parseInt(data[0].CVAHR);
        this.IPEAK = parseInt(data[0].IPEAK);
        this.VPEAK = parseInt(data[0].VPEAK);
        this.STATUS0 = parseInt(data[0].STATUS0);
        this.STATUS1 = parseInt(data[0].STATUS1);
        this.OILVL = parseInt(data[0].OILVL);
        this.OVLVL = parseInt(data[0].OVLVL);
        this.SAGLVL = parseInt(data[0].SAGLVL);
        this.MASK0 = parseInt(data[0].MASK0);
        this.MASK1 = parseInt(data[0].MASK1);
        this.IAWV = parseInt(data[0].IAWV);
        this.IBWV = parseInt(data[0].IBWV);
        this.ICWV = parseInt(data[0].ICWV);
        this.INWV = parseInt(data[0].INWV);
        this.VAWV = parseInt(data[0].VAWV);
        this.VBWV = parseInt(data[0].VBWV);
        this.VCWV = parseInt(data[0].VCWV);
        this.VA2WV = parseInt(data[0].VA2WV);
        this.VB2WV = parseInt(data[0].VB2WV);
        this.VC2WV = parseInt(data[0].VC2WV);
        this.VNWV = parseInt(data[0].VNWV);
        this.VN2WV = parseInt(data[0].VN2WV);
        this.AWATT = parseInt(data[0].AWATT);
        this.BWATT = parseInt(data[0].BWATT);
        this.CWATT = parseInt(data[0].CWATT);
        this.AVAR = parseInt(data[0].AVAR);
        this.BVAR = parseInt(data[0].BVAR);
        this.CVAR = parseInt(data[0].CVAR);
        this.AVA = parseInt(data[0].AVA);
        this.BVA = parseInt(data[0].BVA);
        this.CVA = parseInt(data[0].CVA);
        this.AVTHD = parseInt(data[0].AVTHD);
        this.AITHD = parseInt(data[0].AITHD);
        this.BVTHD = parseInt(data[0].BVTHD);
        this.BITHD = parseInt(data[0].BITHD);
        this.CVTHD = parseInt(data[0].CVTHD);
        this.CITHD = parseInt(data[0].CITHD);
        this.NVRMS = parseInt(data[0].NVRMS);
        this.NV2RMS = parseInt(data[0].NV2RMS);
        this.CHECKSUM = parseInt(data[0].CHECKSUM);
        this.VNOM = parseInt(data[0].VNOM);
        this.AFIRMS = parseInt(data[0].AFIRMS);
        this.AFVRMS = parseInt(data[0].AFVRMS);
        this.BFIRMS = parseInt(data[0].BFIRMS);
        this.BFVRMS = parseInt(data[0].BFVRMS);
        this.CFIRMS = parseInt(data[0].CFIRMS);
        this.CFVRMS = parseInt(data[0].CFVRMS);
        this.LAST_RWDATA32 = parseInt(data[0].LAST_RWDATA32);
        this.PHSTATUS = parseInt(data[0].PHSTATUS);
        this.ANGLE0 = parseInt(data[0].ANGLE0);
        this.ANGLE1 = parseInt(data[0].ANGLE1);
        this.ANGLE2 = parseInt(data[0].ANGLE2);
        this.PHNOLOAD = parseInt(data[0].PHNOLOAD);
        this.LINECYC = parseInt(data[0].LINECYC);
        this.ZXTOUT = parseInt(data[0].ZXTOUT);
        this.CAMPMODE = parseInt(data[0].CAMPMODE);
        this.CFMODE = parseInt(data[0].CFMODE);
        this.CF1DEN = parseInt(data[0].CF1DEN);
        this.CF2DEN = parseInt(data[0].CF2DEN);
        this.CF3DEN = parseInt(data[0].CF3DEN);
        this.APHCAL = parseInt(data[0].APHCAL);
        this.BPHCAL = parseInt(data[0].BPHCAL);
        this.CPHCAL = parseInt(data[0].CPHCAL);
        this.PHSING = parseInt(data[0].PHSING);
        this.CONFIG = parseInt(data[0].CONFIG);
        this.MMODE = parseInt(data[0].MMODE);
        this.ACCMODE = parseInt(data[0].ACCMODE);
        this.LCYCMODE = parseInt(data[0].LCYCMODE);
        this.PEAKCYC = parseInt(data[0].PEAKCYC);
        this.SAGCYC = parseInt(data[0].SAGCYC);
        this.CFCYC = parseInt(data[0].CFCYC);
        this.HSDC_CFG = parseInt(data[0].HSDC_CFG);
        this.Version = parseInt(data[0].Version);
        this.CONFIG3 = parseInt(data[0].CONFIG3);
        this.ATEMPOS = parseInt(data[0].ATEMPOS);
        this.BTEMPOS = parseInt(data[0].BTEMPOS);
        this.CTEMPOS = parseInt(data[0].CTEMPOS);
        this.NTEMPOS = parseInt(data[0].NTEMPOS);
        this.LAST_RWDATA8 = parseInt(data[0].LAST_RWDATA8);
        this.APF = parseInt(data[0].APF);
        this.BPF = parseInt(data[0].BPF);
        this.CPF = parseInt(data[0].CPF);
        this.APERIOD = parseInt(data[0].APERIOD);
        this.BPERIOD = parseInt(data[0].BPERIOD);
        this.CPERIOD = parseInt(data[0].CPERIOD);
        this.APNOLOAD = parseInt(data[0].APNOLOAD);
        this.VARNOLOAD = parseInt(data[0].VARNOLOAD);
        this.VANOLOAD = parseInt(data[0].VANOLOAD);
        this.LAST_ADD = parseInt(data[0].LAST_ADD);
        this.LAST_RWDATA16 = parseInt(data[0].LAST_RWDATA16);
        this.CONFIG2 = parseInt(data[0].CONFIG2);
        this.LAST_OP = parseInt(data[0].LAST_OP);
        this.WTHR = parseInt(data[0].WTHR);
        this.VARTHR = parseInt(data[0].VARTHR);
        this.VATHR = parseInt(data[0].VATHR);
        localStorage.setItem("parseo", '1')
        console.log("termina parse")
      })
  }
}