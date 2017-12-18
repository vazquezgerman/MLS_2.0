using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mls_backend.Models
{
    public class Estate
    {
        public int ID { get; set; }
        public string OwnerId { get; set; }
        public string Street { get; set; }
        public string Number { get; set; }
        public string Floor { get; set; }
        public string Department { get; set; }
        public int CoveredSquareMeters { get; set; }
        public int Price { get; set; }
    }
}
