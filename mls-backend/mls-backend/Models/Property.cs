using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mls_backend.Models
{
    public class Property
    {
        public int ID { get; set; }
        public string Calle { get; set; }
        public string Numero { get; set; }
        public string Piso { get; set; }
        public string Departamento { get; set; }
    }
}
