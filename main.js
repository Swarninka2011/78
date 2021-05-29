var i = 0;

function update()
{
    i++;
    var number_of_members_in_array = 6
    if(i > number_of_members_in_array)

    {
        i = 0;  
    }

    var updated_image = images[i]
    var updated_name = names[i]
    document.getElementById("family_memeber_images").src = updated_image
    document.getElementById("family_memeber_names").innerHTML = updated_name
}