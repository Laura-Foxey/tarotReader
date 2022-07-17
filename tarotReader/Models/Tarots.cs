using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Tarots")]
public class Tarots
{
    [Key]
    public int TarotId {get; set; }
    public string TarotName {get; set; }

    public string TarotDescription {get; set; }

    public string TarotLove {get; set; }

    public string TarotCareer {get; set; }

    public string TarotWealth {get; set; }
}